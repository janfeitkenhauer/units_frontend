import Card from "@/components/card";

export default function Homepage() {
  const sections = ['units'];

  return (
    <div className="mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {sections.map((section, index) => (
              <Card key={index} link={section} basePath="" />
          ))}
      </div>
    </div>
  )
}
