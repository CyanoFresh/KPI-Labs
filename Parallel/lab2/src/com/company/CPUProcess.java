package com.company;

public class CPUProcess implements Runnable {
    private static int counter = 0;
    private int id;
    private final int time;   // time to next process
    private final int flow;

    public CPUProcess(int time, int flow) {
        this.time = time;
        this.flow = flow;
        setId();
    }

    private synchronized void setId() {  // set unique id to any process
        id = counter++;
    }

    @Override
    public void run() {

    }

    public int getId() {
        return id;
    }

    public int getTime() {
        return time;
    }

    public int getFlow() {  // номер потока генератора процесса
        return flow;
    }

    @Override
    public String toString() {
        return "Process #" + id + " (" + time + ")";
    }
}