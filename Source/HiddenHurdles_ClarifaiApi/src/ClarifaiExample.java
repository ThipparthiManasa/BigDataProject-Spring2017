

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.openimaj.image.DisplayUtilities;
import org.openimaj.image.ImageUtilities;
import org.openimaj.image.MBFImage;
import org.openimaj.image.colour.RGBColour;
import org.openimaj.image.typography.hershey.HersheyFont;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import clarifai2.api.ClarifaiBuilder;
import clarifai2.api.ClarifaiClient;
import clarifai2.api.ClarifaiResponse;
import clarifai2.dto.input.ClarifaiInput;
import clarifai2.dto.input.image.ClarifaiImage;
import clarifai2.dto.model.output.ClarifaiOutput;
import clarifai2.dto.prediction.Concept;
import okhttp3.OkHttpClient;

/**
 * Servlet implementation class ClarifaiExample
 */
@WebServlet("/ClarifaiExample")
public class ClarifaiExample extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public ClarifaiExample() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String imageLocation = request.getParameter("action");
		String relativePath = request.getRealPath(imageLocation);
		final ClarifaiClient client = new ClarifaiBuilder("-jF8fpTbTw31DqwuBUugyqzxY8puAJFgwXy9DiV0", "Ucqoc-poVD00LcwtyrwF_clEiwtZa__OqbPg7Qj_")
                .client(new OkHttpClient()) // OPTIONAL. Allows customization of OkHttp by the user
                .buildSync(); // or use .build() to get a Future<ClarifaiClient>
        client.getToken();


        ClarifaiResponse responseOutput = client.getDefaultModels().generalModel().predict()
                .withInputs(
                        ClarifaiInput.forImage(ClarifaiImage.of(new File(relativePath)))
                )
                .executeSync();
        List<ClarifaiOutput<Concept>> predictions = (List<ClarifaiOutput<Concept>>) responseOutput.get();
        if (predictions.isEmpty()) {
            System.out.println("No Predictions");
        }
        else{
            MBFImage image = ImageUtilities.readMBF(new File(relativePath));
            int x = image.getWidth();
            int y = image.getHeight();


            List<Concept> data = predictions.get(0).data();
            JsonObject tags =new JsonObject();

            JsonArray outputTags = new JsonArray();
            
            for (int i = 0; i < data.size(); i++) {
            	tags.addProperty(data.get(i).name(), data.get(i).value());
               System.out.println(data.get(i).name() + " - " + data.get(i).value());
               image.drawText(data.get(i).name(), (int)Math.floor(Math.random()*x), (int) Math.floor(Math.random()*y), HersheyFont.ASTROLOGY, 20, RGBColour.RED);
            }
            outputTags.add(tags);
            response.setContentType("application/text");
    		response.getWriter().print(outputTags);
        }	
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
