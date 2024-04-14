import { Heading } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export function AnimatedHeader() {
  return (
    <Heading size="lg">
      <TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "Graphic Designer",
          1000,
          "Photographer",
          1000,
          "Musician",
          1000,
          "Enthusiast of coffee",
          1000,
          "Enthusiast of dogs",
          1000,
          "Enthusiast of potatoes",
          1000,
          "Cool guy",
          1000,
          "Are you still reading this?",
          1000,
          "I appreciate it",
          1000,
          "I'm done now though",
          1000,
          "Bye!",
          1000,
          "For real this time",
          1000,
          "No more messages",
          1000,
          "I promise",
          1000,
          "Ok, I'm really done",
          1000,
          "I'm out",
          1000,
          "I'm serious",
          1000,
          "I'm leaving",
          1000,
          "I'm gone",
          1000,
          "I'm not here anymore",
          1000,
          "I'm not sure why you're still here",
          1000,
          "I'm not sure why I'm still here",
          1000,
          "Okay you win",
          1000,
          "Are you happy now?",
          1000,
          "If you've made it this far...",
          1000,
          "You may as well reach out",
          1000,
          "I'm always happy to chat",
          1000,
          "Here's my email:",
          1000,
          "andre@zekic.ca",
        ]}
        wrapper="span"
        speed={50}
      />
    </Heading>
  );
}
