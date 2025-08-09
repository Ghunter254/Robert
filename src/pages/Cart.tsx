import Navigation from "@/components/shared/Navigation";

function Cart() {
  return (
<div>
    <Navigation/>
    <h1 className="pageheader">
        <span className="text-gradient">Your cart is empty!</span>
    </h1>
</div>
  );
}

export default Cart;
