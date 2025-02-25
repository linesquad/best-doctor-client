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
export async function apiGetAboutMeExperience() {
  try {
    const { data, error } = await supabase.from("experience").select("*");
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

export const getEducation = async () => {
  const { data, error } = await supabase.from("education").select("*");
  if (error) throw new Error(error.message);
  return { data, error };
};
