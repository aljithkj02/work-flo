import { SingleColumn } from "@/components/home/SingleColumn"
import { columnsData } from "@/utils/constants/columnsInfo"

export const Columns = () => {
  return (
    <div className="grid grid-cols-4 rounded-lg bg-white">
        <SingleColumn 
            colName="To Do"
            data={columnsData.todo}
        />
        <SingleColumn 
            colName="In Progress"
            data={columnsData.inProgress}
        />
        <SingleColumn 
            colName="Under Review"
            data={columnsData.underReview}
        />
        <SingleColumn 
            colName="Finished"
            data={columnsData.finished}
        />
    </div>
  )
}
