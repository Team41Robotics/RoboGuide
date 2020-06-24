import React from "react";
import { Helmet } from "react-helmet";
import ReactEmbedGist from "react-embed-gist";
import TrackedBlockPage from "./TrackedBlockPage";

import javaLogo from "../img/javaLogo.png";
import printImg from "../img/print.svg";
import mathFunctionImg from "../img/mathFunction.png";
import functionEx1Img from "../img/functionEx1.svg";
import functionEx2Img from "../img/functionEx2.svg";
import functionEx2CallImg from "../img/functionEx2Call.svg";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Java Guide</title>
      </Helmet>
      <TrackedBlockPage
        id="java"
        header={
          <>
            <h1>Intro to Java Programming</h1>
            <img
              src={javaLogo}
              className="img-fluid rounded w-50 mb-5"
              alt="Java logo"
            />
          </>
        }
        blocks={[
          {
            id: "beginner-resources",
            title: "Beginner Resources",
            content: (
              <>
                <h1 className="text-center">Beginner Resources</h1>
                <ul style={{ fontSize: "larger" }}>
                  <li>
                    If you want an overview of Java syntax, I have created a
                    guide below
                  </li>
                  <li>
                    If you want a thorough, interactive Java guide, I recommend
                    using{" "}
                    <a href="https://www.codecademy.com/learn/learn-java">
                      Codecademy
                    </a>
                    . It's great for people who are just beginning.
                  </li>
                  <li>
                    If you are already familiar with basic Java syntax and want
                    to practice, I recommend trying{" "}
                    <a href="https://codingbat.com/java">Coding Bat</a>. You can
                    make an account to save your progress for this site. I
                    recommend the warmup, AP CS, logic, and array problems.
                    String manipulation, recursion, maps, and functional mapping
                    are not as useful in the robotics programming that we do.
                  </li>
                </ul>
              </>
            )
          },
          {
            id: "java-basics",
            title: "Java Basics",
            content: (
              <>
                <h2 className="text-center">Java Basics</h2>
                On team 41 we use{" "}
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">
                  Java
                </a>
                , an{" "}
                <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
                  object-oriented programming language
                </a>
                . What this means is that our programs are based around the
                creation and use of{" "}
                <a href="https://en.wikipedia.org/wiki/Object_(computer_science)">
                  objects
                </a>
                . These objects have properties which are associated with them.
                This allows us easily reference our data. For example, take a
                look at this simple Bird class:
                <ReactEmbedGist gist="JamesNarayanan/6f49b41bc5e75cc5071ffdd418e8d45e" />
                In Java, a class is an object that can be manipulated. In this
                case, the Bird object has attrributes that store its color,
                name, and position. It also has built in functions that
                manipulate its properties or return values about it. One
                advantage to creating an object such as this is that other users
                can use it without knowing exactly how it works. This principle
                is called{" "}
                <a href="https://en.wikipedia.org/wiki/Abstraction_(computer_science)">
                  abstraction
                </a>{" "}
                and is very useful when writing programs. It allows people to
                easily build off pre-existing{" "}
                <a href="https://en.wikipedia.org/wiki/Library_(computing)">
                  libraries
                </a>{" "}
                (collections of programs).
                <br />
                <br />
                Before we go too far though, let's take a step back and start
                with some of the fundamentals of programming languages.
              </>
            )
          },
          {
            id: "comments",
            title: "Comments",
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Comment_(computer_programming)">
                    Comments
                  </a>
                </h2>
                Before we start going over code, knowing what a comment is will
                be helpful.
                <ReactEmbedGist gist="JamesNarayanan/aada7a81ccd9220bf791cffd3916a0d5" />
              </>
            )
          },
          {
            id: "debugging",
            title: "Debugging",
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Debugging">
                    Debugging
                  </a>
                </h2>
                Additionally, before we go on, it will be helpful to know the
                basics of debugging. Often errors occur when writing a program.
                Learning good debugging practices can save you a lot of time
                otherwise spent staring at code. Two very useful tools for this
                are the{" "}
                <a href="https://en.wikipedia.org/wiki/System_console">
                  console
                </a>{" "}
                and{" "}
                <a href="https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/smartdashboard/smartdashboard-intro.html">
                  SmartDashboard
                </a>{" "}
                (an information display for FRC). An easy way to output to the
                console is by using the following command:
                <img
                  src={printImg}
                  className="d-block mx-auto my-1"
                  alt="Printing"
                />
                If you're deploying your code to a RoboRIO, you can view these
                print statements in the RIOLog.
              </>
            )
          },
          {
            id: "variables",
            title: "Variables",
            children: [
              { id: "variable-initialization", title: "Initialization" },
              { id: "variable-arrays", title: "Arrays" }
            ],
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Variable_(computer_science)">
                    Variables
                  </a>
                </h2>
                One of the most important parts of any programming language is
                the use of variables. These are named values stored in the
                computer's RAM. In Java, the primitive{" "}
                <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html">
                  variable types
                </a>{" "}
                include the following:
                <ul>
                  <li>
                    <span className="code">boolean</span> true or false (1{" "}
                    <a href="https://en.wikipedia.org/wiki/Bit">bit</a>)
                  </li>
                  <li>
                    <span className="code">byte</span> Stores whole number
                    values from -128 to 127 (8-bit)
                  </li>
                  <li>
                    <span className="code">short</span> Stores whole number
                    values from −32,768 to 32,767 (16-bit)
                  </li>
                  <li>
                    <span className="code">char</span> Stores character values
                    from '\u0000' (0) to '\uffff' (65535) (16-bit). This is a
                    way to store a <u>single</u>{" "}
                    <a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>{" "}
                    character.
                  </li>
                  <li>
                    <span className="code">int</span> Stores whole number values
                    from -2,147,483,648 to 2,147,483,647 (32-bit). If one tries
                    to store a number with a decimal point in an int (or any
                    other data type that cannot store floating point values),
                    the compiler will throw an error.
                  </li>
                  <li>
                    <span className="code">long</span> Stores whole number
                    values from -9,223,372,036,854,775,808‬ to
                    9,223,372,036,854,775,807 (64-bit).
                  </li>
                  <li>
                    <span className="code">float</span> Stores 32-bit{" "}
                    <a href="https://floating-point-gui.de/formats/fp/">
                      floating point
                    </a>{" "}
                    values (can have a decimal point)
                  </li>
                  <li>
                    <span className="code">double</span> Stores 64-bit floating
                    point values (can have a decimal point)
                  </li>
                </ul>
                Another very commonly used data type in Java is a{" "}
                <span className="code">String</span>. This type of variable is
                used to represent a <i>String</i> of character connected
                together. We use it to represent any collection of characters,
                including single characters, words, or sentences.
                <br />
                Also, it is a Java convention to declare variables using{" "}
                <a href="https://en.wikipedia.org/wiki/Camel_case">
                  camel case
                </a>
                .
                <br />
                <br />
                <h4 id="variable-initialization">Initialization</h4>
                <ReactEmbedGist gist="JamesNarayanan/d7a7b687169ade46d50bd0509dd7b498" />
                <h4 id="variable-arrays">Arrays</h4>
                <ReactEmbedGist gist="JamesNarayanan/b1b7b7a6b70946dcd0190cffcce053e3" />
              </>
            )
          },
          {
            id: "operators",
            title: "Operators",
            children: [
              { id: "operators-math", title: "Math" },
              {
                id: "operators-variable-reassignment",
                title: "Variable Reassignment"
              },
              { id: "operators-logical", title: "Logical" }
            ],
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Operator_(computer_programming)">
                    Operators
                  </a>
                </h2>
                <h4 id="operators-math">Mathematical Operators</h4>
                <ReactEmbedGist gist="JamesNarayanan/6f591354bda4a06b6a86e1bcdbf698fa" />
                <h4 id="operators-variable-reassignment">
                  Variable Reassignment
                </h4>
                <ReactEmbedGist gist="JamesNarayanan/ca98ccfdd39aaf8e84a27c9824239d91" />
                <h4 id="operators-logical">Logical/Relational Operators</h4>
                <ReactEmbedGist gist="JamesNarayanan/2987063d0479ef6b3710cff34012f3a8" />
              </>
            )
          },
          {
            id: "control-flow",
            title: "Control Flow",
            children: [
              { id: "control-flow-if-else", title: "If/Else" },
              { id: "control-flow-loops", title: "Loops" }
            ],
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Control_flow">
                    Control Flow
                  </a>
                </h2>
                <h4 id="control-flow-if-else">If/Else Statements</h4>
                <ReactEmbedGist gist="JamesNarayanan/ed62220dcb364557382ab1b80533719f" />
                <h4 id="control-flow-loops">Loops</h4>
                <ReactEmbedGist gist="JamesNarayanan/d004dbcdd325026d1855ebd2b9e02d51" />
              </>
            )
          },
          {
            id: "functions",
            title: "Functions",
            children: [{ id: "functions-scope", title: "Scope" }],
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Subroutine">
                    Functions
                  </a>
                </h2>
                The use of functions allows a programmer to organize their code
                effectively as well as reduce repition. Functions are sometimes
                also referred to as{" "}
                <a href="https://en.wikipedia.org/wiki/Method_(computer_programming)">
                  methods
                </a>
                . Just like in mathematics, a function in Java has inputs
                (paramaters) and returns a value based on those inputs. In math
                you've probably seen a function written like this:
                <img
                  src={mathFunctionImg}
                  className="d-block mx-auto my-1 p-2 rounded monokai"
                  style={{ height: "50px" }}
                  alt="Math function"
                />
                This same function could be written in Java as:
                <img
                  src={functionEx1Img}
                  className="d-block mx-auto my-1"
                  alt="Function example 1"
                />
                A function in java has a few main components that make it up:
                <ul>
                  <li>
                    Return Type - This includes all the primitive types talked
                    about above, as well as any type of Object, or void (does
                    not return anything)
                  </li>
                  <li>
                    Name - Typically written in{" "}
                    <a href="https://en.wikipedia.org/wiki/Camel_case">
                      camel case
                    </a>
                    , like variables
                  </li>
                  <li>
                    <a href="https://en.wikipedia.org/wiki/Parameter_(computer_programming)">
                      Parameters
                    </a>{" "}
                    - These are the inputs for the function. Each one must have
                    its type specified. Functions can also be constructed
                    without any parameters
                  </li>
                  <li>Curly Braces - Not optional</li>
                  <li>
                    Code to Execute - If the function has a return type (not
                    void), then it MUST have a return statement in it.
                  </li>
                </ul>
                Here is a function that I made when I created a TicTacToe game
                in Java:
                <img
                  src={functionEx2Img}
                  className="d-block mx-auto my-1"
                  alt="Function example 2"
                />
                This function checks if the TicTacToe board is full by iterating
                through each row and column. This is useful because now I can
                use this elsewhere in the code. When somebody reads my code,
                they will see:
                <img
                  src={functionEx2CallImg}
                  className="d-block mx-auto my-1"
                  alt="Function call example"
                />
                They will quickly be able to understand what I'm trying to do
                (and the function annotation will clear up any questions).
                Functions go a long way towards making code neater.
                <br />
                <br />
                <h4 id="functions-scope">Scope</h4>
                Functions must placed inside a class. There are two main scopes
                that functions are declared with: public and private. Public
                functions can be accessed by any instance of the function's
                respective class object. Private functions can only be accessed
                within the specific class. This is useful for when a function is
                only used for some internal computation in the class. This will
                be shown further in the next section about classes.
              </>
            )
          },
          {
            id: "classes",
            title: "Classes",
            content: (
              <>
                <h2 className="text-center">
                  <a href="https://en.wikipedia.org/wiki/Class_(computer_programming)">
                    Classes
                  </a>
                </h2>
                Classes are essential components of programs in object oriented
                languages. An object in Java is created as a class. As mentioned
                in the beginning of the guide, a class can have multiple
                variables and methods associated with it.
                <ReactEmbedGist gist="JamesNarayanan/d8c18b949b938ff515d3d8564f436bb7" />
              </>
            )
          }
        ]}
      />
    </>
  );
}
