const LeetCodeIcon = ({ size = 32, color = 'currentColor' }) => (
    
    <a
    href="https://leetcode.com/u/tusharkumar888219/"
    target="_blank" // Opens in a new tab
    rel="noopener noreferrer" // Security best practice
    aria-label="Open LeetCode" // Accessibility label
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      className="icon-leetcode  hover:scale-125 transition duration-300 ease-in-out"
      aria-label="LeetCode Logo"
    >
      <path d="M21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797c0-.989-.76-1.791-1.693-1.791" />
    </svg>
    </a>
  );
  
  export default LeetCodeIcon;