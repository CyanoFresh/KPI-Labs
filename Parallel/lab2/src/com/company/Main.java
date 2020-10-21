package com.company;

public class Main {
    private static final int NUMBER_OF_CPU = 2;
    private static final int NUMBER_OF_FLOWS = 2;
    private static final int NUMBER_OF_QUEUE = 2;
    private static final int NUMBER_OF_PROCESS = 15;
    private static final int MAX_QUEUE_PROCESSES = 5;

    private final CPU[] cpus;
    private final ProcessFlow[] flows;
    private final CPUQueue[] queues;
    private final Thread[] flowThreads;
    private final Thread[] cpuThreads;
    private final int processes;

    public Main(int nCPU, int nFlow, int nQueue, int nProcesses) {
        cpus = new CPU[nCPU];
        cpuThreads = new Thread[nCPU];
        for (int i = 0; i < nCPU; i++) {
            cpus[i] = new CPU();                    // runnable object
            cpuThreads[i] = new Thread(cpus[i]);    // flow for this object
        }

        flows = new ProcessFlow[nFlow];
        flowThreads = new Thread[nFlow];
        for (int i = 0; i < nFlow; i++) {
            flows[i] = new ProcessFlow(nProcesses);  // runnable object
            flowThreads[i] = new Thread(flows[i]);   // thread for this object
        }

        this.queues = new CPUQueue[nQueue];
        for (int i = 0; i < nQueue; i++) {
            queues[i] = new CPUQueue();
        }
        processes = nProcesses * nFlow;
    }

    private boolean isAlive() {
        for (Thread flowThread : flowThreads) {
            if (flowThread.isAlive()) {
                return true;
            }
        }

        return false;
    }

    private static boolean isAnyCPUAlive(Main ss) {
        for (int i = 0; i < ss.cpuThreads.length; i++) {
            if (ss.cpuThreads[i].isAlive()) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Main ss = new Main(NUMBER_OF_CPU, NUMBER_OF_FLOWS, NUMBER_OF_QUEUE, NUMBER_OF_PROCESS);  //  by default generate 25 process by each flow

        for (int i = 0; i < ss.flows.length; i++) {
            ss.flows[i].setQueue(ss.queues[0]);
        }

        for (int i = 0; i < ss.cpuThreads.length; i++) {
            ss.cpuThreads[i].start();
        }

        for (int i = 0; i < ss.flowThreads.length; i++) {
            ss.flowThreads[i].start();
        }

        CPU cpu0 = ss.cpus[0];
        CPU cpu1 = ss.cpus[1];
        CPUQueue q0 = ss.queues[0];
        CPUQueue q1 = ss.queues[1];

        while (ss.isAlive() || !q0.isEmpty() || !q1.isEmpty()) {
            var q = q1.getSize() > q0.getSize() ? q1 : q0;

            if (!q.isEmpty()) {
                if (cpu0.isBusy() && cpu1.isBusy()) {
                    continue;
                }

                if (q.getSize() > MAX_QUEUE_PROCESSES) {
                    if (!cpu0.isBusy()) {
                        cpu0.setTask(q.remove());
                    } else {
                        cpu1.setTask(q.remove());
                    }
                } else {
                    if (!cpu1.isBusy()) {
                        cpu1.setTask(q.remove());
                    }
                }
            }

            sleep();
        }

        cleanup(ss);

        System.out.println("\n===\nResults\n===");
        System.out.println("Total processes: " + ss.processes);
        System.out.println("Processed by CPU0: " + cpu0.processedCount + " " + (int)((double)cpu0.processedCount / ss.processes * 100) + "%");
        System.out.println("Processed by CPU1: " + cpu1.processedCount + " " + (int)((double)cpu1.processedCount / ss.processes * 100) + "%");
    }

    private static void cleanup(Main ss) {
        System.out.println("Done\n");

        while (isAnyCPUAlive(ss)) {
            for (int i = 0; i < ss.cpuThreads.length; i++) {
                if (!ss.cpus[0].isBusy()) {
                    ss.cpuThreads[0].interrupt();
                }
                if (!ss.cpus[1].isBusy()) {
                    ss.cpuThreads[1].interrupt();
                }
            }
            sleep();
        }
    }

    private static void sleep() {
        sleep(50);
    }

    private static void sleep(int duration) {
        try {
            Thread.sleep(duration);
        } catch (InterruptedException e) {

        }
    }
}