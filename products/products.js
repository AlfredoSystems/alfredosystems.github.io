let products = [
    {
        name: "Arduino Uno Clone",
        link: "uno",
        image: "arduino-uno-1.png",
        price: "TBD",
        blurb: `A classic microcontroller that allows you to interface with your project. Connect multiple different servos, LEDs, switches, or other devices to the pins and program using the free programming IDE provided by Arduino.`
    },
    {
        name: "ESP32",
        link: "esp32",
        image: "esp32-1.png",
        price: "TBD",
        blurb: `Like the Arduino Uno, the ESP32 is a microcontroller that is perfect for projects ranging from small robots to large-scale IOT implementations. The ESP32 comes with built in Wi-Fi and Bluetooth capability, as well as a variety of digital and analog pins to connect any number of sensors and actuators to.`
    },
    {
        name: "Adafruit Motor Shield v1",
        link: "adafruit-motor-shield-v1",
        image: "adafruit-motor-shield-1.jpg",
        price: "TBD",
        blurb: `Streamline and simplify projects that require multiple motors by adding a V1 motor shield. Simply attach the shield to an arduino uno and attach up to 4 DC motors and your power supply to the screw-down terminals to get started.`
    },
    {
        name: "NoU 2",
        link: "alfredo-nou-2",
        image: "nou-2-1.png",
        price: "$10.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Give power to your projects with this Alfredo-original ESP32 shield. Built with six DC motor ports, support for continuous servos, a custom and intuitive library, and a sleek, compact design, the NoU 2 is perfect for virtually any small robotics project.`
    },
    {
        name: "BT06",
        link: "bt06",
        image: "bt06-1.png",
        price: "TBD",
        blurb: `The BT06 is a wireless bluetooth module with an easy to use 4 pin interface.  Often used as a simple means of interfacing with your project wirelessly, simply download the library and run the provided commands and your project can seamlessly be interfaced with over Bluetooth.`
    },
    {
        name: "TT Motor",
        link: "tt-motor",
        image: "tt-motor-1.png",
        price: "TBD",
        blurb: `The generic “yellow motors” you all know and love. Often used in your robot’s drivetrain, and occasionally for other means of actuation, this motor comes equipped with a gearbox for added torque, as well as a plastic wheel with rubber tread.`
    },
    {
        name: "N20 Motor",
        link: "n20-motor",
        image: "n20-motor-1.png",
        price: "$4.99",
        blurb: `Smaller, more compact, and more powerful than the larger TT motor, the N20 motor is perfect for applications where the TT motor is just too big. These brushed DC motors are perfect for manipulator and intake mechanisms in your next robotics project.`
    },
    {
        name: "9g Servo",
        link: "9g-servo",
        image: "battleblue-2.jpg",
        price: "TBD",
        blurb: `These miniature actuators are used to move to precise angles. Weighing a total of 9 grams, these servos are a great way to add finer and more complex movement to your projects.`
    },
    {
        name: "9V Li-ion Battery",
        link: "9v-li-ion-battery",
        image: "9v-li-ion-battery-1.png",
        price: "TBD",
        blurb: `More powerful than NiCd, these Li-ion 9V batteries are perfect for powering small projects that require more current or charge than conventional AAs and 9Vs. Comes complete with a built-in port for micro USB recharging.`
    },
    {
        name: "9V Battery Barrel Jack Cable",
        link: "9v-barrel-jack",
        image: "battleblue-2.jpg",
        price: "TBD",
        blurb: `Just snap your 9V battery into this and connect the barrel jack end into your desired board. It’s as simple as that!`
    },
    {
        name: "MiniFRC Infinite Recharge Kit of Parts",
        link: "infinite-recharge-kit-of-parts",
        image: "battleblue-2.jpg",
        price: "$20.00",
        blurb: `Inspire yourself and think ‘mini’ with the latest MiniFRC Kit of Parts. This new kit includes some of the fundamentals that most robots will need to compete in this year’s miniaturized Infinite Recharge game.`
    },
    {
        name: "BattleBlue",
        link: "battleblue",
        image: "battleblue-2.jpg",
        price: "TBD",
        blurb: `Arm your latest battlebot project with this highly competent Alfredo-original robot control system. A low cost, lightweight solution to your most recent battle bots project, the BattleBlue has built in support for 2 DC motors and 2 PWM channels. Bypass the need for complex RC controls with the custom Alfredo Battle Blue app, capable of running on any android device.`,
        description: `Around the world, the sport of Combat Robotics is popular and growing. This
        is particularly true for the 150-gram, 1-pound, and 3-pound weight
        classes, with over 6500 fights in the last two years. Despite the
        popularity, the controls system used to wirelessly control robots was designed
        decades ago for RC aircraft, and today is seriously outdated and expensive.
        The Battleblue is a lightweight and inexpensive Bluetooth-based robot control system.<br/><br/>
        <strong>Key features:</strong>
        <div style="margin-left: 10px">
            <li>Small</li>
            <li>Lightweight</li>
            <li>Controls 2 brushed DC motors, perfect for a drivetrain</li>
            <li>2 configurable PWM channels, perfect for brushless ESCs or servos</li>
            <li>Controlled using a smartphone app instead of an expensive transmitter</li>
        </div>
        <br/>
        <strong>App features:</strong>
        <div style="margin-left: 10px">
            <li>Runs on any device with Android 7.0 and up</li>
            <li>Configurable on-screen joysticks, buttons, and sliders</li>
            <li>Built-in channel mixing</li>
            <li>Advanced channel mixing</li>
            <li>iOS and physical controller support coming soon</li>
        </div>
        <br/><hr/><br/>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiqjvcJdVbMs6H7IabbahszrhP_y4192kgPJw7qlW_2tNQ1w/viewform?embedded=true" width=100% height=460px frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
    },
    {
        name: "E Deck",
        link: "e-deck",
        image: "e-deck-1.png",
        price: "TBD",
        blurb: `A Meme card deck - すごい！このあたらし「ミム　カード　デク」はとてもよくないですよ。ジェコブさんのマグナム　オパス　です。だいきらい（えと。。。きれい？）。かわないでください。ありがとうございます。`
    },
    {
        name: "MiniFRC Power Cell",
        link: "power-cell",
        image: "battleblue-2.jpg",
        price: "TBD",
        blurb: `Tiny foam power cell units for MiniFRC.`
    }
]