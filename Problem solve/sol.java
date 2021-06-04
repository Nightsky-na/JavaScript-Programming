import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int HEIGHT = in.nextInt();
        int WIDTH = in.nextInt();
        String C = in.next();
        String CV = in.next();
        String CH = in.next();

        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");
        for (int i = 0; i < WIDTH; i++) {
            if (i==0||i==WIDTH-1) {
                System.out.print(C);
            } else{
                System.out.print(CH);
            }
        }
        System.out.println();
        for (int i = 0; i < HEIGHT-1; i++) {
            for (int j = 0; j < WIDTH; j++) {
                if (j==0||j==WIDTH-1) {
                    System.out.print(CV);
                } else{
                    System.out.print(" ");
                }
            }
        System.out.println();
        }
        for (int i = 0; i < WIDTH; i++) {
            if (i==0||i==WIDTH) {
                System.out.print(C);
            } else{
                System.out.print(CH);
            }
        }
    }
}