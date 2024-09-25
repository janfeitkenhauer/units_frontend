import Data from "@/components/data";
import Iri from "@/components/iri";

export default function Time() {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Time</h1>
        <Iri iri="https://vocab.sentier.dev/qudt/unit/SEC"/>
        <Data endpoint="http://10.10.162.100:8000/v0_1/unit?iri=https://vocab.sentier.dev/qudt/unit/SEC&lang=en" />
      </div>
    );
  }
  