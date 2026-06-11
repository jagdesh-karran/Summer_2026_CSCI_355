/* This file handles two interactive features*/

/* totalCartCount tracks the running total of items across ALL
   products. It starts at 0 and increases every time the user
   clicks "Add to cart". It is never reset (items stay in cart). */
let totalCartCount = 0;

/*   1. changeQty()   — adjusts the quantity selector on each
                        product card (the - and + buttons)
     
   Called by the - and + buttons inside each product card.

   Parameters:
     btn   — the button element that was clicked (gives us a
             reference point to find the right qty display)
     delta — +1 (increment) or -1 (decrement)

   How it works:
     1. Walk up from the clicked button to its parent
        (.qty-selector), then find the .qty-display span inside.
     2. Parse its text content as an integer.
     3. Add delta, then clamp to a minimum of 1 so the user
        can never select 0 or a negative quantity.
     4. Write the new value back into the span. */

function changeQty(btn, delta) {

  // btn.parentElement is the .qty-selector div
  const display = btn.parentElement.querySelector('.qty-display');

  // Parse the current quantity shown in the span
  let qty = parseInt(display.textContent);

  // Apply the change, but never go below 1
  qty = Math.max(1, qty + delta);

  // Update the displayed number
  display.textContent = qty;
}


/* ── addToCart(btn) ──────────────────────────────────────────
   Called when the user clicks an "Add to cart" button.

   Parameter:
     btn — the "Add to cart" button that was clicked

   How it works:
     1. Find the .qty-display for this specific product card
        by walking up to .product-controls (the shared parent
        of the qty selector and the add button).
     2. Read the chosen quantity.
     3. Add it to totalCartCount.
     4. Update the #cart-count span in the header so the user
        can see the new total.
     5. Reset this card's qty back to 1 (ready for next add).
     6. Play the flash animation on the button as visual
        confirmation. The void offsetWidth line forces the
        browser to reflow, which resets the animation so it
        replays even if clicked multiple times in a row. */

        /*2. addToCart()   — adds the selected quantity to the global
                        cart counter shown in the header
   ============================================================ */
function addToCart(btn) {
   
  // Walk up to the controls row, then find the qty display
  const controls = btn.closest('.product-controls');
  const qtyDisplay = controls.querySelector('.qty-display');

  // How many of this product does the user want to add?
  const qty = parseInt(qtyDisplay.textContent);

  // Add to the running cart total
  totalCartCount += qty;

  // Reflect the new total in the header basket counter
  document.getElementById('cart-count').textContent = totalCartCount;

  // Reset this product's selector to 1 after adding
  qtyDisplay.textContent = 1;

  // Trigger the flash animation:
  //   First remove the class in case it's already on the button,
  //   force a reflow (so the browser sees the class as removed),
  //   then re-add it to restart the animation from scratch.
  btn.classList.remove('flash');
  void btn.offsetWidth; // reflow — this line is intentional
  btn.classList.add('flash');
}
