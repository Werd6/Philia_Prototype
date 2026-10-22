import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import countries110 from "world-atlas/countries-110m.json";
import MapPins from "./MapPins";
import { COUNTRIES, ORIGIN } from "@/lib/content";

const WIDTH = 960;
const HEIGHT = 440;

type Props = { name: string };
type Country = { name: string; lat: number; lon: number };

const topo = countries110 as unknown as Topology<{ countries: GeometryCollection<Props> }>;
const all = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry, Props>;
const world: FeatureCollection<Geometry, Props> = {
  type: "FeatureCollection",
  features: all.features.filter((f) => f.properties.name !== "Antarctica"),
};

const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], world);
const path = geoPath(projection);

function project(lat: number, lon: number) {
  const [x, y] = projection([lon, lat]) ?? [0, 0];
  return { x, y };
}

export default function WorldMap({
  countries = COUNTRIES,
  hoverLabels = false,
}: {
  countries?: Country[];
  hoverLabels?: boolean;
}) {
  const origin = project(ORIGIN.lat, ORIGIN.lon);
  const represented = new Set(countries.map((c) => c.name));
  const originPin = (
    <g transform={`translate(${origin.x} ${origin.y})`} className="map-origin">
      <path d="M0 0c-4-6-9-10-9-16a9 9 0 0 1 18 0c0 6-5 10-9 16Z" />
      <circle cy="-16" r="3.4" fill="#fff" />
      <text x="14" y="-12">Where Philia began</text>
    </g>
  );

  return (
    <figure className={`world-map ${hoverLabels ? "has-hover-labels" : ""}`}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role={hoverLabels ? "group" : "img"} aria-labelledby="map-title">
        <title id="map-title">
          {`World map with pins in the ${countries.length} countries represented in the Philia community`}
        </title>
        {world.features.map((f: Feature<Geometry, Props>, i) => (
          <path
            key={`${f.properties.name}-${i}`}
            d={path(f) ?? ""}
            className={represented.has(f.properties.name) ? "map-land is-home" : "map-land"}
          />
        ))}
        {hoverLabels ? (
          <>
            {originPin}
            <MapPins pins={countries.map((c) => ({ name: c.name, ...project(c.lat, c.lon) }))} width={WIDTH} />
          </>
        ) : (
          <>
            {countries.map((c) => {
              const p = project(c.lat, c.lon);
              return (
                <g key={c.name} className="map-pin" transform={`translate(${p.x} ${p.y})`}>
                  <circle r="12" className="map-pin-halo" />
                  <circle r="5" className="map-pin-dot" />
                  <title>{c.name}</title>
                </g>
              );
            })}
            {originPin}
          </>
        )}
      </svg>
    </figure>
  );
}
