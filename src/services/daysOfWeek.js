import supabase from "./supabase";

export const getDaysOfWeek = async (selectedDay) => {
  const { data, error } = await supabase
    .from("days_of_week")
    .select("*, doctor_availability(*)")
    .eq("week_day", selectedDay);

  if (error) throw new Error(error.message);

  return data;
};

export async function updateDaysOfWeek({ id, is_avaliable }) {
  const { data, error } = await supabase
    .from("days_of_week")
    .update({ is_avaliable })
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
}
