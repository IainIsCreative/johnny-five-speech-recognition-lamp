# RGB Lamp Circuit

Here's the circuit for the lamp. It's relatively simple but it's important to understand what's going on if this is your first time wiring up a circuit. There's also a list of parts so you can get everything you need to make this lamp.

You don't many components, but a small starter kit is very cheap. I personally recommending getting a Kuman kit — it's very cheap and has a lot of components (including multiple LEDs, resistors, cables, capacitors and much more).

## List of Components

- 1 RGB LED
- 3 220Ohm Resistors
- Jumper cables
- Breadboard (Small Breadboard will do fine)
- Arduino Genuino UNO (Can also work with other Arduino units)
- Small Plastic Container (Preferably one that's round, white, and has *some* transparency)

## Circuit

#### Connecting

When it comes to connecting a circuit, it's important to understand the flow of current and how it works. A circuit is exactly what it is — a loop of electrical current flowing from the positive point (or points) of our source and returning to the negative end of our source. It's important to understand this as wiring up the circuit incorrectly can break our board and/or our circuit!

##### Breadboard

Let's look at the breadboard — we're using a small breadboard for this one, which will sit in our container. The flow of power in a breadboard goes from side to side, and cables can carry the power from one part of the breadboard to the other. Breadboards are also solderless, which makes it great for prototyping. Because they're solderless, we can connect and disconnect cables and components as we see fit. Easy to connect, and easy to remove. Perfect for prototyping in numerous projects.

##### RGB LED

Our RGB LED has 3 points, and need to be connected via 3 seperate pins, one for each color. Notice on the LED there's a long pin — on an LED, this is the negative pin. All the other pins, from left to right, are Red, Green, and Blue, respectively, and are connected by the positive points of the circuit.

##### Resistors

It's also important to know what resistors are, and why we are using them in this project. Because our Arduino Microcontroller is connected to a computer, a large amount of power can go through the circuit. This can be a lot for our LED to handle! For this, we'll be using 220Ohm resistors, one for each positive pin.

A resistor is used to limit flow of power in a circuit. Think of it as a flow of water going through a pipe, but has to go through a smaller pipe. This limits the flow of water. The exact same thing is happening with our resistors — they limit the flow of current in our circuit to our components.

Another thing that may catch you out is knowing which resistor is which. Pay attention to color bands on a resistor — this tells you the resistor's Ohm value.

#### Setup

In our project, we need 5 male-to-male pin cables, 3 220Ohm resistors, an RGB LED, and our small breadboard. We connect the 3 pins for our Red, Green, and Blue pins through to the breadboard, which will then connect up to our resistors, and onto each RGB pin of our LED.

The negative pin of the LED is then connected through to a cable, which will carry it along the breadboard, and connect up to another cable, which is connected to our Arduino Microcontroller through a GND pin. This completes the circuit and you should have a simple circuit ready to use!

## Optional

If you want, you can use different transparencies of container and see if this improves the effect of the RGB light inside the container.
