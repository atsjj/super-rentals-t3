import type { FC, ComponentProps } from "react";
import { env } from "../env/client.mjs";

export type MapProps = ComponentProps<"img"> & {
  lat?: number;
  lng?: number;
  zoom?: number | string;
};

const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

const Map: FC<MapProps> = (props) => {
  const { height, lat, lng, width, zoom } = props;
  const coordinates = `${lng || ""},${lat || ""},${zoom || 9}`;
  const dimensions = `${width || 0}x${height || 0}`;
  const token = encodeURIComponent(env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
  const accessToken = `access_token=${token}`;

  return (
    <div className="map">
      <img
        alt={`Map image at coordinates ${lat},${lng}`}
        {...props}
        src={`${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Map;
