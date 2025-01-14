import Form from "@/components/Form"
import List from "@/components/List"



const ActionPage = () => {
  return (
    <>
      <h3 className="text-3xl text-center my-5">ActionPage</h3>
      <div className="grid grid-cols-2 gap-5">
        <div className=""><Form /></div>
        <div className=""><List /></div>
      </div>
    </>

  )
}

export default ActionPage