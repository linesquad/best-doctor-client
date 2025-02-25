import supabase from "./supabase";

export async function apiGetAboutMe() {
  try {
    const { data, error } = await supabase.from("about").select("*");
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}
