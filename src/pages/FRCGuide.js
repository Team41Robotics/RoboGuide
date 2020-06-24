import React from "react";
import { Helmet } from "react-helmet";
import ReactEmbedGist from "react-embed-gist";
import TrackedBlockPage from "./TrackedBlockPage";

import robotImg from "../img/blur.jpg";
import driverStationUSB from "../img/DriverStationUSB.png";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>FRC Guide</title>
      </Helmet>
      <TrackedBlockPage
        id="frc"
        header={
          <>
            <h1>Intro to FRC Robotics Programming with Java</h1>
            <img
              src={robotImg}
              className="img-fluid rounded mb-5"
              alt="Robot"
            />
          </>
        }
        blocks={[
          {
            id: "software-setup",
            title: "Software Setup",
            content: (
              <>
                <h1 className="text-center">Software Setup</h1>
                <h2>
                  <a href="https://www.java.com/en/">Install Java</a>
                </h2>
                Press download to go to the downloads page for your respectice
                operating system. There may be multiple versions. You should use
                the version that is recommended.
                <br />
                <br />
                <h2>
                  <a href="https://docs.wpilib.org/en/stable/docs/getting-started/getting-started-frc-control-system/wpilib-setup.html">
                    Install WPILib & VS Code
                  </a>
                </h2>
                Since the 2018-2019 season, we write our programming using
                Visual Studio Code. It is an IDE (Integrated Development
                Environment) that uses a plugin called WPILib. WPILib contains
                tons of classes that are the foundation of any FRC robot
                project. If you want detailed documentation about WPILib
                classes, go{" "}
                <a href="https://first.wpi.edu/FRC/roborio/release/docs/java/index.html">
                  here
                </a>
                .
                <br />
                <br />
                <h2>
                  <a href="https://docs.wpilib.org/en/stable/docs/getting-started/getting-started-frc-control-system/frc-game-tools.html">
                    Install FRC Game Tools
                  </a>
                </h2>
                The part of the game tools that we use most often is the{" "}
                <a href="https://docs.wpilib.org/en/stable/docs/software/driverstation/driver-station.html">
                  driver station
                </a>
                . We use it to run our code as well as other things including
                checking the comms status, checking the battery voltage, and
                finding game controller ports. When installing the game tools,
                you may be asked for some identification. Ask your captain about
                that.
                <hr className="bg-white w-75" />
                All done! Now you can finally get programming. To make your
                first project, open VS Code, click the WPILib icon in the top
                right, and click "Create New Project". If you want to start
                fresh, choose template -> java -> Timed Robot. If you want to
                get a feel for program layout, you can choose to see an example
                project instead. (I recommend choosing the "Tank Drive" example.
                We've used Tank Drive to control the robot the past few years.)
              </>
            )
          },
          {
            id: "frc-programming-basics",
            title: "FRC Programming Basics",
            children: [
              { id: "file-structure", title: "File Structure" },
              { id: "basic-robot-code", title: "Basic Robot Code" },
              { id: "advanced-robot-code", title: "Advanced Robot Code" }
            ],
            content: (
              <>
                <h1 className="text-center">FRC Programming Basics</h1>
                <h2 id="file-structure">File Structure</h2>
                So now you've created a new Java project using the WPILib Timed
                Robot template. Where do you go to write your code? During this
                guide I am going to reference the{" "}
                <a href="https://github.com/Team41Robotics/2020-Robot-Code/tree/master/02_FinalRobot">
                  final code
                </a>{" "}
                for the 2020 robot a lot. You should open that up in another tab
                to follow along. In the <i>02_FinalRobot</i> folder, you can
                navigate to <i>src/main/java/frc/robot</i>. In that folder
                you'll see a bunch of <i>*.java</i> files, two of which your
                template project already has: <i>Main.java</i> and{" "}
                <i>Robot.java</i>. The <i>Main.java</i> file is just there to
                start your program off (it's where you're main method is). You
                don't have to modify this at all. Where you can start to write
                some code is the <i>Robot.java</i> file. Also, when you create
                any additional classes they should be placed in the same parent
                folder as <i>Main.java</i> and <i>Robot.java</i>. The only other
                folder that you need to know something about is the{" "}
                <i>vendordeps</i> folder. It contains json files which allow you
                to import dependencies that are not part of WPILib (needed for
                SparkMax and TalonSRX/FX motor controllers).
                <br />
                <br />
                <h2 id="basic-robot-code">Basic Robot Code</h2>
                In <i>Robot.java</i> you'll find multiple methods including two
                that we use very often:{" "}
                <span className="code">robotInit()</span> and{" "}
                <span className="code">teleopPeriodic()</span>. We use{" "}
                <span className="code">robotInit()</span> to initialize all of
                our variables when the program first runs. To control the robot,
                we use <span className="code">teleopPeriodic()</span>. This
                method runs periodically (every 20ms) and executes whatever is
                inside of it. Because of that, loops are (usually) not required
                to make the robot move or sense the environment repeatedly. I'm
                sure you've been wondering how to actually make a robot move. It
                is now time to do that! To do so, we are going to use two
                different classes:
                <a
                  href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/Joystick.html"
                  className="code"
                >
                  Joystick
                </a>{" "}
                and
                <a
                  href="https://www.revrobotics.com/content/sw/max/sw-docs/java/com/revrobotics/CANSparkMax.html"
                  className="code"
                >
                  CANSparkMax
                </a>
                . To initialize your Joystick object, find the port number of
                your controller in the Driver Station. The USB devices tab
                should look something like this:
                <img
                  src={driverStationUSB}
                  alt="Driver Station USB Menu"
                  className="d-block mx-auto my-1"
                />
                Your <span className="code">Joystick</span> object should be
                created at the top of your program inside the Robot class but
                outside of any method. The method you will use to get data from
                your Joystick is{" "}
                <span className="code">
                  <i>JoystickName</i>.getRawAxis(<i>Axis #</i>)
                </span>
                . You can find the axis numbers in the same page of the Driver
                Station. You will then feed the readings from your Joystick axes
                into your spark max's. The method you will use to set the speed
                is ... shocker ...{" "}
                <span className="code">
                  <i>SparkName</i>.set(<i>speed</i>)
                </span>
                . If you feed two Joystick axes into at least two different
                sparks you should be able to make a robot move anywhere you want
                with tank drive! Here's an example of what your program might
                look like:
                <ReactEmbedGist gist="JamesNarayanan/8a86b81bb2c478c8d90353540cd03e72" />
                Now you've created your first robot program! From here you can
                do so much more!
                <ul>
                  <li>
                    You can check out some more examples{" "}
                    <a href="https://github.com/wpilibsuite/allwpilib/tree/master/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples">
                      here
                    </a>
                  </li>
                  <li>
                    You can read up on the documentation{" "}
                    <a href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/package-summary.html">
                      here
                    </a>
                  </li>
                  <li>
                    You can check out all of Team 41's code{" "}
                    <a href="https://github.com/Team41Robotics">here</a>
                  </li>
                </ul>
                <br />
                <h2 id="advanced-robot-code">Advanced Robot Code</h2>
                In the large projects that we use for the final game code, we
                don't put all of our code in the <i>Robot.java</i> class.
                Instead, we seperate our code into seperate classes. This makes
                it easier to understand and work with. You can see the final
                code from 2020{" "}
                <a href="https://github.com/Team41Robotics/2020-Robot-Code/tree/master/02_FinalRobot/src/main/java/frc/robot">
                  here
                </a>
                . Many of the classes that you see there are self-explanatory.
                One very important one is <i>Ports.java</i>. We use that class
                to organize all our port numbers for motor controllers, servos,
                and sensors as well as all button numbers. Classes are a great
                tool which you will use in the future as you build bigger and
                better projects.
              </>
            )
          }
        ]}
      />
    </>
  );
}
