//print Floyd's triangle.
import java.util.Scanner;

public class QpEight {
    public static void main(String[] args) {
             int n;
             int num=1;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the n");
        n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <=i; j++) {
                System.out.print(num+" ");
                num++;
            }
            System.out.println();
        }
    }
    }
