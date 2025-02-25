import supabase from "./supabase";

export async function updateAvailableTime({ id, is_avaliable }) {
  const { data, error } = await supabase
    .from("doctor_availability")
    .update({ is_avaliable })
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
}
