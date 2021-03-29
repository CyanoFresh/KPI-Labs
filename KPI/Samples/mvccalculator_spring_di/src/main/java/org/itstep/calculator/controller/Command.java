package org.itstep.calculator.controller;

@FunctionalInterface
public interface Command {
    String execute(String command);
}
