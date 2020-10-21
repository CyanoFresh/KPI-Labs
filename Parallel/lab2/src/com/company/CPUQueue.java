package com.company;

import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

/**
 * Concurrent Linked CPUQueue for Process Objects
 */
public class CPUQueue {
    private final Queue<Process> queue;
    private static int counter = 0;
    private final int id = counter++;

    /**
     * Constructor creates empty queue
     */
    public CPUQueue() {
        this.queue = new ConcurrentLinkedQueue<>();
    }

    public synchronized int getSize() {
        return queue.size();
    }

    public synchronized void add(Process process) {
        queue.add(process);
    }

    public synchronized Process remove() {
        if (queue.isEmpty()) {
            throw new IllegalArgumentException();
        }
        return queue.remove();
    }

    public synchronized boolean isEmpty() {
        return queue.isEmpty();
    }

    @Override
    public String toString() {
        return "Queue #" + id;
    }
}