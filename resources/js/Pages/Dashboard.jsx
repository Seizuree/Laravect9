import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Dashboard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const data = {
      title, description, category
    }
    Inertia.post('/news', data)
  };

  console.log(props)

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="p-6 text-gray-900">
            <input
              type="text"
              placeholder="Judul"
              className="m-2 input input-bordered w-full"
              onChange={(title) => setTitle(title.target.value)}
            />
            <input
              type="text"
              placeholder="Deskripsi"
              className="m-2 input input-bordered w-full"
              onChange={(description) => setDescription(description.target.value)}
            />
            <input
              type="text"
              placeholder="Kategori"
              className="m-2 input input-bordered w-full"
              onChange={(category) => setCategory(category.target.value)}
            />
            <button className="btn btn-primary m-2" onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
