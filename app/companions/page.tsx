import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async({ searchParams }: SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  console.log(companions);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:flex-none">
            <SearchInput />
          </div>
          <div className="min-w-[150px]">
            <SubjectFilter />
          </div>
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard 
            key={companion.id}
            {...companion} 
            color = {getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary
