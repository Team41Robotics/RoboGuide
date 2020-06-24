import React from "react";
import { Helmet } from "react-helmet";
import ReactEmbedGist from "react-embed-gist";
import Jumbotron from "../components/Jumbotron";

import javaLogo from "../img/javaLogo.png";
import printImg from "../img/print.svg";

import "../css/JavaGuide.css";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Java Guide</title>
      </Helmet>
      <div className="text-center">
        <h1>Intro to Java Programming</h1>
        <img
          src={javaLogo}
          className="img-fluid rounded w-50 mb-5"
          alt="Java logo"
        />
      </div>
      <div className="row">
        <div
          className="col-12 col-md-10 col-lg-8 mx-auto"
          id="content-col-java"
        >
          <Jumbotron id="beginner-resources">
            <h1 className="text-center">Beginner Resources</h1>
            <ul style={{ fontSize: "larger" }}>
              <li>
                If you want an overview of Java syntax, I have created a guide
                below
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
                If you are already familiar with basic Java syntax and want to
                practice, I recommend trying{" "}
                <a href="https://codingbat.com/java">Coding Bat</a>. You can
                make an account to save your progress for this site. I recommend
                the warmup, AP CS, logic, and array problems. String
                manipulation, recursion, maps, and functional mapping are not as
                useful in the robotics programming that we do.
              </li>
            </ul>
          </Jumbotron>
          <Jumbotron id="java-basics">
            <h2 className="text-center">Java Basics</h2>
            On team 41 we use{" "}
            <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">
              Java
            </a>
            , an{" "}
            <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
              object-oriented programming language
            </a>
            . What this means is that our programs are based around the creation
            and use of{" "}
            <a href="https://en.wikipedia.org/wiki/Object_(computer_science)">
              objects
            </a>
            . These objects have properties which are associated with them. This
            allows us easily reference our data. For example, take a look at
            this simple Bird class:
            <ReactEmbedGist gist="JamesNarayanan/6f49b41bc5e75cc5071ffdd418e8d45e" />
            In Java, a class is an object that can be manipulated. In this case,
            the Bird object has attrributes that store its color, name, and
            position. It also has built in functions that manipulate its
            properties or return values about it. One advantage to creating an
            object such as this is that other users can use it without knowing
            exactly how it works. This principle is called{" "}
            <a href="https://en.wikipedia.org/wiki/Abstraction_(computer_science)">
              abstraction
            </a>{" "}
            and is very useful when writing programs. It allows people to easily
            build off pre-existing{" "}
            <a href="https://en.wikipedia.org/wiki/Library_(computing)">
              libraries
            </a>{" "}
            (collections of programs).
            <br />
            <br />
            Before we go too far though, let's take a step back and start with
            some of the fundamentals of programming languages.
          </Jumbotron>
          <Jumbotron id="comments">
            <h2 className="text-center">
              <a href="https://en.wikipedia.org/wiki/Comment_(computer_programming)">
                Comments
              </a>
            </h2>
            Before we start going over code, knowing what a comment is will be
            helpful.
            <ReactEmbedGist gist="JamesNarayanan/aada7a81ccd9220bf791cffd3916a0d5" />
          </Jumbotron>
          <Jumbotron>
            <h2 className="text-center">
              <a href="https://en.wikipedia.org/wiki/Debugging">Debugging</a>
            </h2>
            Additionally, before we go on, it will be helpful to know the basics
            of debugging. Often errors occur when writing a program. Learning
            good debugging practices can save you a lot of time otherwise spent
            staring at code. Two very useful tools for this are the{" "}
            <a href="https://en.wikipedia.org/wiki/System_console">console</a>{" "}
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
            If you're deploying your code to a RoboRIO, you can view these print
            statements in the RIOLog.
          </Jumbotron>
        </div>
        <div
          className="d-none d-xl-block col-xl-2 bd-toc"
          id="toc-java"
          style={{ opacity: 0 }}
        ></div>
      </div>
    </>
  );
}
