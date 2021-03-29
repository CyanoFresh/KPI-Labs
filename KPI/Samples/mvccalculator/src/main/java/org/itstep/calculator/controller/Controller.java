package org.itstep.calculator.controller;

import org.itstep.calculator.view.View;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;

public class Controller {

    private InputStream in;
    private View view;
    CommandFactory commandFactory = CommandFactory.getInstance();

    public Controller(InputStream in, View view) {
        this.in = in;
        this.view = view;
    }

    public void processUserInput(){
        view.printHelp();
        try ( BufferedReader reader = new BufferedReader(new InputStreamReader( in , StandardCharsets.UTF_8)) ){
            while(true){
                String userLine = reader.readLine();
                int spaceIndex = userLine.indexOf(' ');
                if( spaceIndex == -1 ){
                    view.printInputCorrectCommand();
                }
                String userCommand = userLine.substring(0, spaceIndex);
                String arguments = userLine.substring(spaceIndex).trim();
                Command command = commandFactory.getCommand(userCommand);
                String result = command.execute(arguments);
                view.printResult(result);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }


    }
}
