package com.company;

public class CPU implements Runnable {
    private static final int MIN_DURATION = 500;
    private static final int MAX_DURATION = 1000;

    private static int counter = 0;

    private final int id = counter++;
    private final int time;
    private boolean busy;
    private Process process;

    public int processedCount = 0;

    public CPU() {
        this.time = (int) (Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION);
        busy = false;
    }

    public synchronized void setTask(Process p) {
        setProcess(p);
        setBusy(true);
        System.out.println(p + " is being processed by " + this);
    }

    public synchronized void setProcess(Process process) {
        this.process = process;
    }

    public synchronized void setBusy(boolean busy) {
        this.busy = busy;
    }

    public synchronized boolean isBusy() {
        return busy;
    }

    @Override
    public void run() {
        while (!Thread.interrupted()) {
            try {
                if (busy) {
                    if (process == null) {
                        throw new IllegalArgumentException("something wrong with CPU:" + this);
                    }
                    System.out.println(this + " started processing of: " + process);

                    Thread.sleep(time);
                    System.out.println(this + " finished processing of: " + process);
                    setProcess(null);
                    busy = false;
                    processedCount++;
                }
            } catch (InterruptedException e) {
                if (process == null) {
                    System.out.println(this + " request to exit received");
                    break;
                }
            }
        }

        System.out.println(this + " finished");
    }

    @Override
    public String toString() {
        return "CPU" + id;
    }
}
