package org.itstep.calculator.controller;

import org.itstep.calculator.model.CalculatorService;
import org.itstep.calculator.view.View;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SimpleControllerTest {

    @Test
    void executeCommandAddingThreeAndFour() {
        CalculatorService calculatorService = mock(CalculatorService.class);
        View view = mock(View.class);
        SimpleController simpleController = new SimpleController(calculatorService, view);
        when(calculatorService.add(3,4)).thenReturn(7L);


        simpleController.executeCommand("add 3 4");

        verify(view).printResult("7");
        verify(calculatorService).add(3,4);
    }

    @Test
    void executeCommandIncorrectAdd() {
        CalculatorService calculatorService = mock(CalculatorService.class);
        View view = mock(View.class);
        SimpleController simpleController = new SimpleController(calculatorService, view);
        when(calculatorService.add(3,4)).thenReturn(7L);


        simpleController.executeCommand("add 3");

        verify(view).printInputCorrectCommand();
        verifyZeroInteractions (calculatorService);
    }

}