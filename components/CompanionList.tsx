import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const CompanionList = () => {
  return (
    <article>
      <h2>Recent Sessions</h2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
      </Table>
    </article>
  )
}

export default CompanionList
