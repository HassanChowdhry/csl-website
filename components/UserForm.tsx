import { useState } from "react";
import { User } from "../interfaces/index";
import { dynamo } from "../config/dbconfig";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export default function UserForm() {
  const [user, setUser] = useState<User>();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get data from the form.
    const params = {
      TableName: "csl-users",
      Item: {
        id: Math.floor(Math.random() * 10000).toString(),
        name: user.name,
        email: user.email,
        program: user.program,
      },
    };

    try {
      const data = await dynamo.send(new PutCommand(params));
      console.log("Success - item added", data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-3" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={(e) => handleChange(e.target.value, "name")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => handleChange(e.target.value, "email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="program"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Program
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="program"
                  name="program"
                  type="text"
                  required
                  onChange={(e) => handleChange(e.target.value, "program")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
