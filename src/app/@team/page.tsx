import { createUserAction } from "@/actions/users/create-user/createUserAction";
import { getUsersAction } from "@/actions/users/get-users/getUsersAction";
import { User } from "@/actions/users/get-users/interface";
import DeleteButton from "@/components/DeleteButton";
import ShowToast from "@/components/ShowToast";

const getUserToast = {
  success: "Success get users !",
  error: "Get users Failed !!",
};

export default async function Page() {
  const response = await getUsersAction();

  return (
    <div>
      <form action={createUserAction} className="m-auto max-w-[680px]">
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="border border-solid border-[#27272A] rounded-xl px-3 text-sm py-1 w-48 m-4 text-start"
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="border border-solid border-[#27272A] rounded-xl px-3 text-sm py-1 w-48 m-4 text-start"
        />
        <input
          type="text"
          name="id"
          placeholder="unique id"
          className="border border-solid border-[#27272A] rounded-xl px-3 text-sm py-1 w-48 m-4 text-start"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          className="border border-solid border-[#27272A] rounded-xl px-3 text-sm py-1 w-48 m-4 text-start"
        />
        <button
          type="submit"
          className="border border-solid border-[#053B48] bg-[#7828C8] text-white text-sm rounded-2xl w-48 py-1 m-4 text-center"
        >
          {!response.data ? "loading ..." : "fetch"}
        </button>
        <br />
        <div className="w-[320px] m-auto mt-8">
          {response.data?.map((value: User, index: number) => (
            <div
              className="border flex justify-between items-center gap-4 border-solid border-black px-4 py-1 m-1 text-center rounded-3xl bg-[#E6FAFE]"
              key={value.id.toString() + index.toString()}
            >
              <DeleteButton userId={value.id.toString()} />
              <div className="text-sm">
                {value.firstname + " " + value.lastname}
              </div>
              <div className="min-w-[20px] text-xs h-5 p-2 flex justify-center items-center rounded-full bg-[#12A150]">
                {value.id}
              </div>
            </div>
          ))}
        </div>
      </form>
      <ShowToast status={response.status} text={getUserToast} />
    </div>
  );
}
