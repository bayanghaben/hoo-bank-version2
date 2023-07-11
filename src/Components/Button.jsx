function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] ${styles}`}
    >
      Get Started {/* The text displayed on the button */}
    </button>
  );
}

export default Button;
// Exporting the Button component
