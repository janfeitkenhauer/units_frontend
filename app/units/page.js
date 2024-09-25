import Link from "next/link";

export default function Units() {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Units</h1>
        <ul>
          <li>
            <Link href="/units/volumes">Volumes</Link>
          </li>
          <li>
            <Link href="/units/mass">Mass</Link>
          </li>
          <li>
            <Link href="/units/velocities">Velocities</Link>
          </li>
          <li>
            <Link href="/units/time">Time</Link>
          </li>
          <li>
            <Link href="/units/electric-current">Electric current</Link>
          </li>
        </ul>
      </div>
    );
  }