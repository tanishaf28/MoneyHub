import { sbClient } from "./supabaseClient.js";

document.getElementById("save").addEventListener("click", async () => {
  const amount = document.getElementById("amount").value;
  const desc = document.getElementById("desc").value;
  const category = document.getElementById("category").value;

  // 🔑 get logged-in user (same as your HTML)
  const { data } = await sbClient.auth.getUser();
  const user = data?.user;

  if (!user) {
    alert("Please login to MoneyHub first");
    return;
  }

  const { error } = await sbClient
    .from("transactions")   // use your SUPABASE_TX_TABLE
    .insert({
      user_id: user.id,
      type: "expense",
      description: desc,
      category: category,
      amount: Number(amount),
      date: new Date().toISOString()
    });

  if (error) {
    console.error(error);
    alert("Failed to save");
  } else {
    alert("Saved!");
  }
});