import { getAllCompanions } from "@/lib/actions/companion.actions";

const CompanionsLibrary = async({ searchParams }: SearchParams) => {

  const params = await searchParams;
  const subject = filters.subject ? filters.subject : '';

  console.log('PARAMS:', params);

  return (
    <div>
      CompanionsLibrary
    </div>
  )
}

export default CompanionsLibrary
