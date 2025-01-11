import supabase from "./supabase";
// getting hero image
export async function apiGetHeroImage() {
  let { data: personalPics, error } = await supabase
    .from("personal_pictures")
    .select("*");
  if (error) throw new Error(error.message);
  return personalPics;
}
// getting hero content
export async function apiGetHeroContent() {
  let { data: getHeroData, error } = await supabase
    .from("headings")
    .select("*");
  if (error) throw new Error(error.message);
  return getHeroData;
}
