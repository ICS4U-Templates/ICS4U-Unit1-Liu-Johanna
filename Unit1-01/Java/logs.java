/*
* The HelloWorld program implements an application that
*
* @author Johanna Liu
* @version 1.0
* @since   2020-01-01
*/

/*
 * Calculates logs
 */
class Logs {
    public static void main(String args[]);
    {
        private static final double MASS_OF_LOGS = 20.0;
        private static final int LOGGING_TRUCK_LIMIT = 1100;

        final Scanner scan = new Scanner(System.in);

        System.out.println("Enter log length (m):");
        final double logLength = scan.nextDouble();

        // Calculate
        final double totalLength = LOGGING_TRUCK_LIMIT / MASS_OF_LOGS;
        final int logAmount = (int) (totalLength / logLength);

        //Output
        System.out.println(logAmount);
    }
}
