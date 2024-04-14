import { Heading } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const attributes = [
  "Software Developer",
  "Graphic Designer",
  "Photographer",
  "Musician",
  "Enthusiast of coffee",
  "Enthusiast of dogs",
  "Enthusiast of tacos",
  "Cool guy",
  "Are you still reading this?",
  "I appreciate it",
  "I'm done now though",
  "Bye!",
  "For real this time",
  "No more messages",
  "I promise",
  "Ok, I'm really done",
  "I'm out",
  "I'm serious",
  "I'm leaving",
  "I'm gone",
  "I'm not here anymore",
  "I'm not sure why you're still here",
  "I'm not sure why I'm still here",
  "Okay you win",
  "Are you happy now?",
  "If you've made it this far...",
  "You may as well reach out",
  "I'm always happy to chat",
  "andre@zekic.ca",
];

const sequence = attributes.flatMap((attribute) => [attribute, 1000]);

export function AnimatedAttributes() {
  return (
    <Heading size="lg">
      <TypeAnimation sequence={sequence} wrapper="span" speed={50} />
    </Heading>
  );
}
