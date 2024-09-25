import Data from "@/components/data";
import Iri from "@/components/iri";

export default function Volume() {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Volumes</h1>
        <Iri iri="https://vocab.sentier.dev/qudt/unit/M3"/>
        <Data endpoint="http://10.10.162.100:8000/v0_1/unit?iri=https://vocab.sentier.dev/qudt/unit/M3&lang=en" />
      </div>
    );
  }
  