import supabase from "./supabase";

async function apiGetSwiperItems() {
  const { data, error } = await supabase.from("doctor_blog").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export default apiGetSwiperItems;
