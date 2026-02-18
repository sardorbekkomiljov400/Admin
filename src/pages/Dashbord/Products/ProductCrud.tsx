import { Button, Input, Select } from "../../../components";

const productCreate = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <form autoComplete="off">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">New Product</h1>
          <Button extraClass="!w-25" type="submit">Save</Button>
        </div>
        <div className="bg-white/5 w-150 mx-auto p-6 rounded-2xl ring-1 ring-white/10 flex flex-col gap-5">
          <label className="text-xs text-slate-300">
            Title
            <Input extraClass="!bg-slate-200 !text-black" name="title" type="text" placeholder="New Product" />
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-xs text-slate-300">
              Price
              <Input extraClass="!bg-slate-200 !text-black" name="price" type="text" placeholder="Price" />
            </label>
            <label className="text-xs text-slate-300">
              Category
              <Select list={[]} extraClass="!bg-slate-200 !p-2.5 !text-black" />
            </label>
          </div>
          <label className="text-xs text-slate-300">
            Description
            <Input extraClass="!bg-slate-200 !text-black" name="description" type="text" placeholder="A description" />
          </label>
          <label className="text-xs text-slate-300">
            Image URL
            <Input extraClass="!bg-slate-200 !text-black" name="images" type="text" placeholder="https://placeholder.co/600x400" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default productCreate;