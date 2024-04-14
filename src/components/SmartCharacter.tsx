import { useState } from "react";

type Props = {
  base: string;
  hover: string;
  onClick?: () => void;
};

/**
 * Displays a character that changes from the base character to the hover character
 * and back when the mouse enters and leaves the component.
 * The onClick prop can be used to trigger an action when the character is clicked.
 * @param base - The character to display when not hovered over.
 * @param hover - The character to display when hovered over.
 * @param onClick - The action to trigger when the character is clicked.
 */
export function SmartCharacter({ base, hover, onClick }: Props) {
  const [character, setCharacter] = useState(base);
  const toggleCharacter = () => setCharacter(character === base ? hover : base);
  return (
    <a
      onClick={onClick}
      onMouseOver={toggleCharacter}
      onMouseLeave={toggleCharacter}
      style={{ cursor: "pointer" }}
    >
      {character}
    </a>
  );
}
