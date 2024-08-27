import { createUserAction } from "@/actions/users/create-user/createUserAction";
import { getUsersAction } from "@/actions/users/get-users/getUsersAction";
import { GetUserAction, User } from "@/actions/users/get-users/interface";
import DeleteButton from "@/components/DeleteButton";
import ShowToast from "@/components/ShowToast";
import Input from "@/components/Input"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { CardActions, CardContent } from "@mui/material";
import UserTable from "@/components/UserTable";
import { redis } from "@/lib/redis/config";

var reg = /^\d+$/;


const getUserToast = {
  success: "Success get users !",
  error: "Get users Failed !!",
};

export default async function Page() {
  console.log(reg.test('kdokockk'), reg.test('0915'));
  
  const response = await getUsersAction();
  return (
    <div>
      <form action={createUserAction} className="m-auto max-w-[680px]">
      <Card>
        <CardContent sx={{display:"flex" , alignItems:"center", justifyContent:"center", padding:"16px 25px", flexWrap:"wrap"}}>
                <Input label="firstname" name="firstname"></Input>
                <Input label="lastname" name="lastname"></Input>
                <Input label="uniqueid" name="id"></Input>
                <Input label="phone" name="phone"></Input>
            </CardContent>
            <CardActions sx={{margin:"0px 44px"}}>
                <Button type="submit" variant="contained" color="success" size="large">{!response.status ? "loading ..." : "login"}</Button>
            </CardActions>
      </Card>

      <UserTable data={response.data} >
      
      </UserTable>
       
        <br />
        <div className="w-[320px] m-auto mt-8">
          {response?.data?.map((value: User, index: number) => (
            <div
              className="border flex justify-between items-center gap-4 border-solid border-black px-4 py-1 m-1 text-center rounded-3xl bg-[#E6FAFE]"
              key={String(value.id) + index.toString()}
            >
              <DeleteButton userId={String(value.id)} />
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
