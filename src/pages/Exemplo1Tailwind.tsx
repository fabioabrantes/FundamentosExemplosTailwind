
export function Exemplo1Tailwind() {


  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="size-12" src="/img/chat.png" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>

  );
}

/* 
Tailwind’s flexbox and padding utilities (flex, shrink-0, and p-6) to control the overall card layout
The max-width and margin utilities (max-w-sm and mx-auto) to constrain the card width and center it horizontally
The background color, border radius, and box-shadow utilities (bg-white, rounded-xl, and shadow-lg) to style the card’s appearance
The size utilities (size-12) to set the width and height of the logo image
The space-between utilities (space-x-4) to handle the spacing between the logo and the text
The font size, text color, and font-weight utilities (text-xl, text-black, font-medium, etc.) to style the card text
*/