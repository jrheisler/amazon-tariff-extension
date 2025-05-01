// Load tariff data
const tariffTable = {
    electronics: { China: 1.45, Vietnam: 0.10 },
    apparel: { India: 0.15, Bangladesh: 0.12 },
    default: { China: 1.45 }
  };
  
  const defaultOrigin = "China";
  
  // Helper to categorize based on title keywords
  function guessCategory(title) {
    title = title.toLowerCase();
    if (title.includes("laptop") || title.includes("headphone") || title.includes("tv")) return "electronics";
    if (title.includes("shirt") || title.includes("dress") || title.includes("jeans")) return "apparel";
    return "default";
  }
  
  // Main logic
  function injectTariff() {
    const titleElem = document.getElementById("productTitle");
    const priceElem = document.querySelector("#corePrice_feature_div .a-price .a-offscreen");
    console.log("📦 Injecting tariff...");
    console.log("Product title:", titleElem?.innerText);
    console.log("Raw price:", priceElem?.innerText);
    
  
    if (!titleElem || !priceElem) return;
  
    const title = titleElem.innerText.trim();
    const priceText = priceElem.innerText.replace("$", "");
    const price = parseFloat(priceText);
  
    if (isNaN(price)) return;
  
    const category = guessCategory(title);
    const rate = tariffTable[category]?.[defaultOrigin] || 0;
    const tariff = price * rate;
  
    const insertText = `📦 Estimated Tariff (${defaultOrigin}, ${category}): $${tariff.toFixed(2)} (${(rate * 100).toFixed(0)}%)`;
  
    // Avoid duplicate injection
    if (document.getElementById("tariff-estimate")) return;
  
    const tariffElem = document.createElement("div");
    tariffElem.id = "tariff-estimate";
    tariffElem.innerText = insertText;
    tariffElem.style.marginTop = "10px";
    tariffElem.style.color = "red";
    tariffElem.style.fontSize = "16px";
    priceElem.parentElement.appendChild(tariffElem);
  }
  
  // Wait for the DOM to fully load (Amazon loads in chunks)
  const observer = new MutationObserver(() => {
    if (document.getElementById("productTitle") && document.querySelector(".a-price .a-offscreen")) {
      injectTariff();
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  