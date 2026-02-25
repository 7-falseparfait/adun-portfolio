import SelectedWork from "@/components/SelectedWork";

export default function WorkPage() {
  return (
    <>
      <div className="pt-8 md:pt-12">
        <SelectedWork showFilters={true} />
      </div>
    </>
  );
}
