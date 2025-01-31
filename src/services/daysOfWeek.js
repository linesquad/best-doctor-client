import supabase from "./supabase"

export const getdaysOfWeek = async () => {
  const {data,error} = await supabase.from("days_of_week").select("*")
  if(error) throw new Error
  return data
}