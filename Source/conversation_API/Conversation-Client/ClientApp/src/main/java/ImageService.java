import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

/**
 * Created by Naga on 13-03-2017.
 */
@WebServlet(name = "ImageService", urlPatterns = "/ImageService")
public class ImageService extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = req.getReader();
        String response="";
        String line;
        while ((line = reader.readLine()) != null) {
            buffer.append(line);
        }
        String data = buffer.toString();
        System.out.println(data);
        String output = "";
        JSONObject params = new JSONObject(data);
        JSONObject result = params.getJSONObject("result");
        JSONObject parameters = result.getJSONObject("parameters");

        if (parameters.get("hiddenhurdles").toString().equals("level3")) {
            JSONObject jsonObject = new JSONObject();
            JSONArray jsonArray = new JSONArray();
            jsonArray.put("https://dl.dropboxusercontent.com/content_link/RKB5JFWAjIClyDyRn9S6oqpBMNbYCxlPuvF5aSMznw7gZiw3Etdk6TnQRrC6Y3HY/file");
            jsonObject.put("data", jsonArray);
            output = jsonObject.toString();
            Data data_ob = Data.getInstance();
            data_ob.setData(output);
            data_ob.setFlag(true);
            JSONObject js = new JSONObject();
            js.put("speech", "Hints of level3 are displayed");
            js.put("displayText", "Hints of level3 are displayed");
            js.put("source", "image database");
            response = js.toString();
        }
        else
        if (parameters.get("hiddenhurdles").toString().equals("level1")) {
            JSONObject jsonObject = new JSONObject();
            JSONArray jsonArray = new JSONArray();
            jsonArray.put("https://dl.dropboxusercontent.com/content_link/IJZR7rdGpDllrV3ljk9WB7XOGmTL6PLRXeOSzMpcg9WZwCQCDRK1jKmZeiKKcVKI/file");
            jsonObject.put("data", jsonArray);
            output = jsonObject.toString();
            Data data_ob = Data.getInstance();
            data_ob.setData(output);
            data_ob.setFlag(true);
            JSONObject js = new JSONObject();
            js.put("speech", "level1 hints are displayed");
            js.put("displayText", "level1 hints are displayed");
            js.put("source", "image database");
            response = js.toString();
        }
        else if (parameters.get("hiddenhurdles").toString().equals("level2")){
            JSONObject jsonObject = new JSONObject();
            JSONArray jsonArray = new JSONArray();
            jsonArray.put("https://dl.dropboxusercontent.com/content_link/ZzpsxLINgDV5GP5KQpBr26weUsPRZeNXm1759GgRgFIZMQX6PcxdgX0S1EzxKtf4/file");
            jsonObject.put("data", jsonArray);
            output = jsonObject.toString();
            Data data_ob = Data.getInstance();
            data_ob.setData(output);
            data_ob.setFlag(true);
            JSONObject js = new JSONObject();
            js.put("speech", "level2 hints are displayed");
            js.put("displayText", "level2 hints are displayed");
            js.put("source", "image database");
            response = js.toString();
        }
        else if (parameters.get("hiddenhurdles").toString().equals("level3")){
            JSONObject jsonObject = new JSONObject();
            JSONArray jsonArray = new JSONArray();
            jsonArray.put("https://dl.dropboxusercontent.com/content_link/v5427FCLQS0TgSDaatahXkWjtmHIFY7jtKERG7yBj9ENuY8XwBxGDKKwCEXuSMzW/file");
            jsonObject.put("data", jsonArray);
            output = jsonObject.toString();
            Data data_ob = Data.getInstance();
            data_ob.setData(output);
            data_ob.setFlag(true);
            JSONObject js = new JSONObject();
            js.put("speech", "level3 hints are displayed");
            js.put("displayText", "level3 hints are displayed");
            js.put("source", "image database");
            response = js.toString();
        }
        else if (parameters.get("null").toString().equals("clear")){
            Data data_ob = Data.getInstance();
            JSONObject js1 = new JSONObject();
            JSONArray jsonArray = new JSONArray();
            jsonArray.put(" ");
            js1.put("data", jsonArray);
            data_ob.setData(js1.toString());
            data_ob.setFlag(true);
            JSONObject js = new JSONObject();
            js.put("speech", "screen is cleared");
            js.put("displayText", "screen is cleared");
            js.put("source", "image database");
            response = js.toString();
        }
        resp.setHeader("Content-type", "application/json");
        resp.getWriter().write(response);
    }
}
