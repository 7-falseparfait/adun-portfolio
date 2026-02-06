import SelectedWork from "@/components/SelectedWork";

export default function WorkPage() {
  return (
    <>
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed header if necessary, or just spacing */}
        <SelectedWork showFilters={true} />
      </div>
    </>
  );
}
