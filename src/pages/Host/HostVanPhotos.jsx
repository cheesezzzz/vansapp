import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <div>
        <img src={van.imageUrl} width='70px' alt="van" />
    </div>
  );
}
